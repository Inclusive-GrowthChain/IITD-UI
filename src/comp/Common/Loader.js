function Loader({ wrapperCls = '', loaderCls = '' }) {
  return (
    <div className={`dc ${wrapperCls}`}>
      <div className={`loader ${loaderCls} `}>
        Loader...
      </div>
    </div>
  )
}

export default Loader