type Props = {
  data: Record<string, unknown>;
};

/**
 * Renders a JSON-LD structured-data block. Content is our own static data
 * (no user input), so `dangerouslySetInnerHTML` is safe here.
 */
const JsonLd = ({ data }: Props) => (
  <script
    type="application/ld+json"
    // biome-ignore lint/security/noDangerouslySetInnerHtml: static, trusted structured data
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLd;
