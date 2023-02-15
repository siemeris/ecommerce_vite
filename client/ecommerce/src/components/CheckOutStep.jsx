
const CheckOutStep = ({step}) => {

  

  return (
    <div class="step__container">
      <ul class="step__progressbar">
        <li className={ step >= 1 ? "active" : null}></li>
        <li className={ step >= 2 ? "active" : null}></li>
        <li className={ step >= 3 ? "active" : null}></li>
      </ul>
    </div>
  )
}

export default CheckOutStep