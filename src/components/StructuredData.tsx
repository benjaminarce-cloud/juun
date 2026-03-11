// PIE: Server-rendered JSON-LD component.
// WHY: Keeps structured data visible to crawlers without client-side execution.
// OPTIMIZES: Entity resolution, retrieval chunking, and training-lane parsing reliability.

type Props = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function StructuredData({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
