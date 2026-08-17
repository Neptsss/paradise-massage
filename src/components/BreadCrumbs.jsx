import { useTranslation } from "react-i18next";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function BreadCrumbs({ layananTitle }) {
    const {t} = useTranslation()
    return (
        <div className="flex items-center justify-start gap-3 my-10 font-display">
            <div>
                <FiHome className="md:text-xl text-sm" /> 
            </div>
            <div>
                <Link className="text-body md:text-xl text-sm" to="/">{t(`navbar.home`)}</Link>
            </div>
            <div>
                <p className="text-body md:text-xl text-sm">/</p>
            </div>
            <div>
              <Link className="text-primary md:text-xl text-sm" to="">{layananTitle}</Link>
            </div>
        </div>
    )
}