import { LogoContainer } from "../../ui/LogoContainer";
import { LuArrowDown, LuArrowDownToLine, LuArrowUp, LuArrowUpToLine } from "react-icons/lu";

export const NavContainer = () => {
    return (
        <div className="nav-container">
            <LogoContainer />
            <div className="buttons-container">
                <button>
                    <LuArrowDownToLine />
                </button>
                <button>
                    <LuArrowDown />
                </button>
                <button>
                    <LuArrowUp />
                </button>
                <button>
                    <LuArrowUpToLine />
                </button>
            </div>
        </div>
    )
}
