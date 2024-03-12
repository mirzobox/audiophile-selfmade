import Facebook from "/assets/shared/desktop/icon-facebook.svg";
import Instagram from "/assets/shared/desktop/icon-instagram.svg";
import Twitter from "/assets/shared/desktop/icon-twitter.svg";

function Socials() {
  const socials = [
    {
      icon: Facebook,
      path: "https://www.instagram.com/audiophilegh",
      title: "Facebook icon",
    },
    {
      icon: Instagram,
      path: "https://www.facebook.com/groups/674135855973934",
      title: "Instagram icon",
    },
    {
      icon: Twitter,
      path: "https://twitter.com/headphonesty",
      title: "Twitter icon",
    },
  ];
  return (
    <ul className="flex items-center gap-4">
      {socials.map(({ path, icon, title }) => {
        return (
          <li key={path}>
            <a
              className="block transition-opacity hover:opacity-80"
              href={path}
              target="_blank"
            >
              <img
                className="h-6 w-6 object-contain"
                src={icon}
                width="24"
                height="24"
                alt={title}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Socials;
