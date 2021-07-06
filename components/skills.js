import styles from "../styles/skills.module.css";
import projectsList from "./skills-list";
const Skills = () => {
   return (
      <div className="container-fluid">
         <div
            className={
               styles.skillsCont +
               " row gx-1 mt-5 py-4  d-flex justify-content-around"
            }
         >
            <div className="col-12 text-center mb-4 mt-5">
               <h1>my skills 👌</h1>
            </div>
            {projectsList.map(
               ({ id, name, description, image, background }) => (
                  <div
                     className={
                        styles.skill + " col-10 col-sm-6 col-md-3 mx-3 my-4 p-2"
                     }
                     key={id}
                     style={{
                        boxShadow: ` ${background} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px`,
                     }}
                  >
                     <div className={styles.skillImg + " mx-auto my-4"}>
                        <img
                           src={image}
                           alt={name}
                           className={styles.image + " mx-auto"}
                        />
                     </div>
                     <div className={styles.skillTitleCont + " text-center"}>
                        <h3 className={styles.skillTitle}>{name} </h3>
                        <p className={styles.skillDesc}>{description} </p>
                     </div>
                  </div>
               )
            )}
         </div>
      </div>
   );
};

export default Skills;
