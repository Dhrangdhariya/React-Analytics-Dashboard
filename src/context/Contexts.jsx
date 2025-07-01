import { createContext, useContext, useState, useEffect } from "react";

const Contexts = createContext();
export const useContexts = () => useContext(Contexts);

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem("User");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("User", JSON.stringify(user));
    }, [user]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [brand, setBrand] = useState('');
    const [totalUser, setTotalUser] = useState('');
    const [totalSub, setTotalSub] = useState('');
    const [activeSub, setActiveSub] = useState('');
    const [price, setPrice] = useState('');
    const [theme, setTheme] = useState(true);

    const handleThemeToggle = () => {
        setTheme(theme == true ? false : true);
    };

    const addUser = (e) => {
        e.preventDefault();
        if (!name.trim() || !email.trim() || !brand.trim() || !totalUser || !totalSub || !activeSub || !price) return;
        const ts = parseInt(totalSub);
        const as = parseInt(activeSub);
        const pr = parseInt(price);
        const tu = parseInt(totalUser);
        if ( isNaN(tu) || isNaN(ts) || isNaN(as) || isNaN(pr)) return;
        setUser([...user, { name: name, email: email, brand: brand, totalUser: totalUser,totalSub: totalSub, activeSub: activeSub, price: price }]);
        setName('');
        setEmail('');
        setBrand('');
        setTotalUser('');
        setTotalSub('');
        setActiveSub('');
        setPrice('');
    };

    function deleteUser(name) {
        const updatedUsers = user.filter((u) => u.name !== name);
        setUser(updatedUsers);
    }

    return (
        <Contexts.Provider
            value={{
                user,
                setUser,
                name,
                setName,
                email,
                setEmail,
                brand,
                setBrand,
                totalUser,
                setTotalUser,
                totalSub,
                setTotalSub,
                activeSub,
                setActiveSub,
                price,
                setPrice,
                addUser,
                theme,
                setTheme,
                handleThemeToggle,
                deleteUser,
            }} >
            {children}
        </Contexts.Provider>
    );
};