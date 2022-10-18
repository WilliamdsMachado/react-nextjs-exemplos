/*
  Exemplo de componente react com children(filhos)
*/

import styles from './Title.module.css'



function Title (props) {
  return (
    <h1 className={styles.title}>
      {props.children}
    </h1>
  )
}

export default Title