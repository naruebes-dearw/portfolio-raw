import "./InfoItem.css";

const InfoItem = ({ Icon, link, theme, title }) => {
  return (
    <a
      className={`item-info-link btn-shadow ${theme}`}
      href={link}
      target="_blank"
      rel="noreferrer"
      title={title}
    >
      {Icon && <Icon />}
    </a>
  )
}

export default InfoItem
