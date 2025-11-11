export function StructuredData({
  data,
  id,
}: {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
  id?: string;
}) {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
