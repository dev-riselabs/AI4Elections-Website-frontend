type ParagraphProps = {
    title : string;
    paragraphs : string[];
}

function Paragraph({title, paragraphs}: ParagraphProps) {
  return (
    <article className="flex flex-col rounded-3xl border border-form-border border-t-0 overflow-hidden relative p-4 md:p-8 gap-3">
      <div className="w-full h-1.5 bg-linear-to-r from-[#2563EB] to-[#7C3AED] top-0 left-0 absolute"></div>
     <h3 className="text-lg md:text-2xl font-bold text-terms-text">{title}</h3>
      <div className="flex flex-col gap-6">
        {
            paragraphs.map(p => <p key={p} className="text-sm md:text-base text-header-text leading-8">{p}</p>)
        }
      </div>
      </article>
  )
}

export default Paragraph