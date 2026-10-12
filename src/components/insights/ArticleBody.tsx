import type { ArticleBlock } from "@/lib/insights-data";

export default function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.type === "p") {
          return (
            <p key={i} className="text-[16px] text-brand-text-muted leading-relaxed">
              {block.text}
            </p>
          );
        }
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="font-serif text-[24px] font-semibold text-brand pt-4"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="space-y-2.5">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="text-[15.5px] text-brand-text-muted leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-brand"
                >
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "table") {
          return (
            <table key={i} className="w-full text-left text-[14.5px] border border-brand-border rounded-lg overflow-hidden">
              <tbody className="divide-y divide-brand-border">
                {block.rows.map(([label, value]) => (
                  <tr key={label} className="even:bg-brand-surface">
                    <td className="py-3 px-4 font-medium text-brand-text-muted w-[38%] align-top">
                      {label}
                    </td>
                    <td className="py-3 px-4 text-brand align-top">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          );
        }
        return null;
      })}
    </div>
  );
}
