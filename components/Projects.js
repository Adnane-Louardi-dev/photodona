import styles from "../styles/projects.module.css";
import projectsList from "./project-list";
const Projects = () => {
   return (
      <>
         <div className="container-fluid">
            <div
               className={
                  styles.projects +
                  " row gx-1 justify-content-around mt-5 px-3 py-4"
               }
            >
               <div className="col-12 text-center mt-2 mb-2">
                  <h1>Some of my projects 👌</h1>
               </div>

               {projectsList.map(({ name, image, description, tools, id }) => (
                  <div
                     key={id}
                     className={styles.projCont + " col-12 col-md-5 my-3 mt-5 "}
                  >
                     <div className={styles.projImg + " h-75 my-3 mx-2"}>
                        <img
                           src={image}
                           className={styles.img}
                           alt="project image"
                        />
                     </div>
                     <div
                        className={
                           styles.projInfo +
                           " w-75 h-75 my-3 mx-2 text-center mx-auto"
                        }
                     >
                        <h2 className={styles.projTitle}>{name}</h2>
                        <p className={styles.projDesc}>{description}</p>
                     </div>
                     <div
                        className={
                           styles.projToolsCont + " px-4 py-1 text-center"
                        }
                     >
                        <p className={styles.projTools}>{tools}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default Projects;
