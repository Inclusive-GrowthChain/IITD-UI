function Loader({ wrapperCls = '', loaderCls = '' }) {
  return (
    <div className={`loader-wrapper ${wrapperCls}`}>
      <div className={`loader ${loaderCls} `}>
      </div>
    </div>
  )
}

export default Loader