import style from './UserProfile.module.css';
function UserProfile() {
  return (
    <>
      <div>
        <h1 className={style.heading}> User Profile </h1>
        <div>
          <img className={style.img}
            src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=is&k=20&c=qoSqKizQmeP0RByR-ARGs6W7JqVkNO17LlnXG_l6sc0="
            alt=""
            srcset=""
          />
          <div>
            <h4>Tanya Agrhari</h4>
            <p> software devloper </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserProfile;
