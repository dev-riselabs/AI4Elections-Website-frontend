type Item =
  | string
  | {
      title?: string;
      list: string[];
    };

type ListProps = {
  title: string;
  descriptions: Item[];
  highlight?: string;
  index? : number;
};

function ParagraphList({ title, descriptions, highlight, index }: ListProps) {
  return (
    <article className="flex flex-col rounded-3xl border border-form-border border-t-0 overflow-hidden relative p-4 md:p-8 gap-3">
      <div className="w-full h-1.5 bg-linear-to-r from-[#2563EB] to-[#7C3AED] top-0 left-0 absolute"></div>
      <h3 className="text-lg md:text-2xl font-bold text-terms-text">{title}</h3>
      <div className="flex flex-col gap-6">
        {descriptions.map((item, i) => {
          if (typeof item === "string") {
            if (highlight && index === i) {
              const [before, after] = item.split(highlight);
              return (
                <p>
                  {before}
                  <span className="font-bold text-accent-text">{highlight}</span>
                  {after}
                </p>
              );
            }
            return (
              <p
                key={i}
                className="text-sm md:text-base text-header-text leading-8"
              >
                {item}
              </p>
            );
          } else {
            return (
              <div key={i} className="flex flex-col gap-2">
                {item.title && (
                  <p className="text-sm md:text-base text-header-text leading-8 font-semibold">
                    {item.title}
                  </p>
                )}
                <ol className="flex flex-col gap-2 list-[lower-alpha] list-inside">
                  {item.list.map((li) => (
                    <li
                      key={li}
                      className="text-[12px] md:text-sm text-header-text "
                    >
                      {li}
                    </li>
                  ))}
                </ol>
              </div>
            );
          }
        })}
      </div>
    </article>
  );
}

export default ParagraphList;
