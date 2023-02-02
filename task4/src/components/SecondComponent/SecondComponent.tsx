import './style.css';

type ProfileInfoTypes = {
  name: string;
  position: string;
  company: string;
};
const SecondComponent = ({ name, position, company }: ProfileInfoTypes) => {
  return (
    <div className="second_container">
      <div className="second_subContainer">
        <div className="second_header">
          <div className="second_header__profile">
            <img className="second_profileImg" src="second.jfif" alt="img2"></img>
            <h2>{name}</h2>
          </div>
          <button className="second_addBtn">
            <span>+</span>
          </button>
        </div>
        <div>
          <table className="second_profileInfo">
            <tr>
              <th>Position</th>
              <th>Company</th>
            </tr>
            <tr>
              <th>{position}</th>
              <th>{company}</th>
            </tr>
          </table>
        </div>
        <div className="second_footerMenu">
          <button className="second_footerMenuIcon">...</button>
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
