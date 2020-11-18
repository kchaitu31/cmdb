import styles from "./Spinner.module.css";
const spinner = () => (
  <div className={styles.SkCubeGrid}>
    <div class={styles.SkCube +" "+styles.SkCube1}></div>
    <div class={styles.SkCube +" "+styles.SkCube2}></div>
    <div class={styles.SkCube +" "+styles.SkCube3}></div>
    <div class={styles.SkCube +" "+styles.SkCube4}></div>
    <div class={styles.SkCube +" "+styles.SkCube5}></div>
    <div class={styles.SkCube +" "+styles.SkCube6}></div>
    <div class={styles.SkCube +" "+styles.SkCube7}></div>
    <div class={styles.SkCube +" "+styles.SkCube8}></div>
    <div class={styles.SkCube +" "+styles.SkCube9}></div>
  </div>
);

export default spinner;