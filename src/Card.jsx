let Card = ({ para, author }) => {
  return (
    <>
      <div className=" w-4/5 m-auto text-center shadow-2xl p-10  overflow-visible">
        <p className="text-3xl font-bold">{para}</p>
        <br />
        <p>{author}</p>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default Card;
