import "./InfoItem.css";

const InfoItem = ({ Icon, link, theme }) => {
  return (
    <a
      className={`project-info-link btn-shadow ${theme}`}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {Icon && <Icon />}
    </a>
  )
}

export default InfoItem
