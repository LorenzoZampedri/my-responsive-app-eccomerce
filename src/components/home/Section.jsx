export default function Section({ title, children, ...rest }) {
  return (
    <div className="my-12 px-4" {...rest}>
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      {children}
    </div>
  );
}