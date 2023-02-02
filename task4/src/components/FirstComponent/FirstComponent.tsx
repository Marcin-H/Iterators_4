import './style.css';

type FirstComponentTypes = {
  img: string;
  title: string;
  description: string;
};

const FirstComponent = ({ img, title, description }: FirstComponentTypes) => {
  return (
    <div className="firstComponent_container">
      <div className="firstComponent_header">
        <img className="firstComponent_header__img" src={img} alt="img1"></img>
      </div>
      <div className="firstComponent_body">
        <div className="firstComponent_body__header">
          <h4>{title}</h4>
        </div>
        <div className="firstComponent_body__desciption">
          <p>{description}</p>
        </div>
        <button className="firstComponent_body__btn">Looks yummy, want some</button>
      </div>
    </div>
  );
};

export default FirstComponent;
