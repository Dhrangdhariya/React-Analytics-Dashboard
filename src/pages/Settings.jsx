import { useContexts } from '../context/Contexts'

const Settings = () => {
    const {
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
        handleThemeToggle
    } = useContexts();

    return (
        <>
            <div className={`${theme ? 'bg-white' : 'bg-gray-800 text-white'} p-4 rounded-lg shadow space-y-6`}>

                <h2 className="text-lg font-semibold">Settings</h2>

                <div>
                    <h3 className="font-medium mb-2">Profile</h3>
                    <form className="space-y-3">
                        <div>
                            <label className="block text-sm">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm">Brand</label>
                            <input
                                type="text"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm">Total Users</label>
                            <input
                                type="number"
                                value={totalUser}
                                onChange={(e) => setTotalUser(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm">Total Subscriptions</label>
                            <input
                                type="number"
                                value={totalSub}
                                onChange={(e) => setTotalSub(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm">Active Subscription</label>
                            <input
                                type="number"
                                value={activeSub}
                                onChange={(e) => setActiveSub(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm">Price</label>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            onClick={addUser}
                        >
                            Save Changes
                        </button>
                    </form>
                </div>

                <div>
                    <h3 className="font-medium mb-2">Preferences</h3>
                    <button
                        onClick={handleThemeToggle}
                        className={`${theme ? ' bg-gray-200 hover:bg-gray-300 ' : ' bg-gray-600 hover:bg-gray-500 '} px-4 py-2 rounded `}
                    >
                        Theme mode: {theme == false ? '🌞 Light' : '🌙 Dark'}
                    </button>

                </div>
            </div>
        </>
    )
}

export default Settings
