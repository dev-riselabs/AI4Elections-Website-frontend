import { useEffect, useState } from "react";

const locationApi = "https://countriesnow.space/api/v0.1/countries";

const selectClassName =
  "rounded-xl bg-form-input shadow text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all disabled:cursor-not-allowed disabled:opacity-60";

type ApiResponse<T> = {
  error: boolean;
  msg: string;
  data: T;
};

type CountryOption = {
  name: string;
};

type StateOption = {
  name: string;
};

async function requestLocationData<T>(
  path: string,
  signal: AbortSignal,
  payload?: Record<string, string>,
): Promise<T> {
  const response = await fetch(`${locationApi}/${path}`, {
    method: payload ? "POST" : "GET",
    headers: payload ? { "Content-Type": "application/json" } : undefined,
    body: payload ? JSON.stringify(payload) : undefined,
    signal,
  });

  if (!response.ok) {
    throw new Error("Location data is unavailable.");
  }

  const result = (await response.json()) as ApiResponse<T>;

  if (result.error) {
    throw new Error(result.msg || "Location data is unavailable.");
  }

  return result.data;
}

function LocationFields() {
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [countryName, setCountryName] = useState("");
  const [states, setStates] = useState<StateOption[]>([]);
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  const [cities, setCities] = useState<string[]>([]);
  const [countriesLoading, setCountriesLoading] = useState(true);
  const [statesLoading, setStatesLoading] = useState(false);
  const [citiesLoading, setCitiesLoading] = useState(false);
  const [countriesError, setCountriesError] = useState(false);
  const [statesError, setStatesError] = useState(false);
  const [citiesError, setCitiesError] = useState(false);
  const [countriesAttempt, setCountriesAttempt] = useState(0);
  const [statesAttempt, setStatesAttempt] = useState(0);
  const [citiesAttempt, setCitiesAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    requestLocationData<CountryOption[]>("iso", controller.signal)
      .then((data) => {
        setCountries(data.sort((left, right) => left.name.localeCompare(right.name)));
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setCountriesError(true);
          setCountries([]);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setCountriesLoading(false);
        }
      });

    return () => controller.abort();
  }, [countriesAttempt]);

  useEffect(() => {
    if (!countryName) {
      return;
    }

    const controller = new AbortController();

    requestLocationData<{ states: StateOption[] }>(
      "states",
      controller.signal,
      { country: countryName },
    )
      .then((data) => setStates(data.states))
      .catch(() => {
        if (!controller.signal.aborted) {
          setStatesError(true);
          setStates([]);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setStatesLoading(false);
        }
      });

    return () => controller.abort();
  }, [countryName, statesAttempt]);

  useEffect(() => {
    if (!countryName || !stateName) {
      return;
    }

    const controller = new AbortController();

    requestLocationData<string[]>(
      "state/cities",
      controller.signal,
      { country: countryName, state: stateName },
    )
      .then((data) => setCities(data.sort((left, right) => left.localeCompare(right))))
      .catch(() => {
        if (!controller.signal.aborted) {
          setCitiesError(true);
          setCities([]);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setCitiesLoading(false);
        }
      });

    return () => controller.abort();
  }, [countryName, stateName, citiesAttempt]);

  return (
    <>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="residence-country"
          className="text-sm md:text-lg text-header-text font-medium"
        >
          Country of Residence *
        </label>
        <select
          id="residence-country"
          name="country"
          required
          className={selectClassName}
          value={countryName}
          disabled={countriesLoading || countries.length === 0}
          onChange={(event) => {
            const nextCountry = event.currentTarget.value;
            setCountryName(nextCountry);
            setStateName("");
            setCityName("");
            setStates([]);
            setStatesLoading(Boolean(nextCountry));
            setStatesError(false);
            setCities([]);
            setCitiesLoading(false);
            setCitiesError(false);
          }}
        >
          <option value="">
            {countriesLoading ? "Loading countries..." : "Select country"}
          </option>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        {countriesError && (
          <p role="alert" className="text-sm text-red-700">
            Could not load countries.{" "}
            <button
              type="button"
              className="underline"
              onClick={() => {
                setCountriesLoading(true);
                setCountriesError(false);
                setCountriesAttempt((attempt) => attempt + 1);
              }}
            >
              Retry
            </button>
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="residence-state"
          className="text-sm md:text-lg text-header-text font-medium"
        >
          State of Residence *
        </label>
        <select
          id="residence-state"
          name="state"
          required
          className={selectClassName}
          value={stateName}
          disabled={!countryName || statesLoading || states.length === 0}
          onChange={(event) => {
            const nextState = event.currentTarget.value;
            setStateName(nextState);
            setCityName("");
            setCities([]);
            setCitiesLoading(Boolean(nextState));
            setCitiesError(false);
          }}
        >
          <option value="">
            {!countryName
              ? "Select country first"
              : statesLoading
                ? "Loading states..."
                : states.length === 0
                ? "No states available"
                : "Select state"}
          </option>
          {states.map((state) => (
            <option key={state.name} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
        {statesError && (
          <p role="alert" className="text-sm text-red-700">
            Could not load states.{" "}
            <button
              type="button"
              className="underline"
              onClick={() => {
                setStatesLoading(true);
                setStatesError(false);
                setStatesAttempt((attempt) => attempt + 1);
              }}
            >
              Retry
            </button>
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="residence-city"
          className="text-sm md:text-lg text-header-text font-medium"
        >
          City *
        </label>
        <select
          id="residence-city"
          name="city"
          required
          className={selectClassName}
          value={cityName}
          disabled={!stateName || citiesLoading || cities.length === 0}
          onChange={(event) => setCityName(event.currentTarget.value)}
        >
          <option value="">
            {!stateName
              ? "Select state first"
              : citiesLoading
                ? "Loading cities..."
                : cities.length === 0
                ? "No cities available"
                : "Select city"}
          </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        {citiesError && (
          <p role="alert" className="text-sm text-red-700">
            Could not load cities.{" "}
            <button
              type="button"
              className="underline"
              onClick={() => {
                setCitiesLoading(true);
                setCitiesError(false);
                setCitiesAttempt((attempt) => attempt + 1);
              }}
            >
              Retry
            </button>
          </p>
        )}
      </div>
    </>
  );
}

export default LocationFields;