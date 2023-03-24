import Hello from "./Hello";

function Main() {
  return (
    <main>
      {/**
       * Mengirim props ke component Hello.
       * nama props: name
       */}
      <Hello name="Badrul" />
      <Hello name="Akhyar" />
      <Hello name="Afid" />
      <Hello name="Azam" />
    </main>
  );
}

export default Main;