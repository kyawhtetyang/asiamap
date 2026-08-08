type ServiceCardProps = {
  title: string;
  body: string;
};

function ServiceCard({ title, body }: ServiceCardProps) {
  return (
    <div className="service-card">
      <strong>{title}</strong>
      <span>{body}</span>
    </div>
  );
}

export default ServiceCard;
