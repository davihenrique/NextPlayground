import styles from './xadrez.module.css'

export default function Xadrez() {
  return (
    <>
      <div style={{ marginLeft: '30%', marginTop: '5%' }}>
        {colunas()}
      </div>
    </>
  )
}

function colunas() {
  const arr = []
  let primaryColor = true

  for (let i = 1; i <= 8; i++) {
    arr.push(linha(primaryColor, i))
    primaryColor = !primaryColor
  }

  return arr
}

function linha(colorInitParam, rowIndex) {
  return (
    <div key={rowIndex} style={{ display: 'flex' }}>
      {percasLinhas(colorInitParam)}
    </div>
  )
}

function percasLinhas(colorInitParam) {
  const arr = []
  let colorInit = colorInitParam

  for (let i = 1; i <= 8; i++) {
    arr.push(
      <div
        key={i}
        className={colorInit ? styles.white : styles.black}
        style={{ float: 'right' }}
      />
    )
    colorInit = !colorInit
  }

  return arr
}
