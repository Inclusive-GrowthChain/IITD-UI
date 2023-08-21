export const TabContent = ({ id, activeTab, children }) => {
  if (activeTab !== id) return null;

  return (
    <div className="TabContent">
      {children}
    </div>
  )
}

export const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id)
  }

  return (
    <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
      {title}
    </li>
  )
}
