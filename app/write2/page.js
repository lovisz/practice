export default function Write2() {
  async function handleSubmit(formData) {
    "use server";
    console.log("안녕");
    console.log("formData >> " + formData.get("title"));
  }

  return (
    <div>
      <form action={handleSubmit}>
        <input name="title"></input>
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
