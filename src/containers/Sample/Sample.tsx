interface SampleProps {
  title: string;
}

const Sample = ({ title }: SampleProps) => {
  return (
    <main>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, odio, necessitatibus quia,
        impedit consequatur libero maiores temporibus veniam quisquam at autem fuga eius a sit.
        Voluptas natus maiores modi expedita!
      </p>
    </main>
  );
};

export default Sample;
