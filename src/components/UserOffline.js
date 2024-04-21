

const UserOffline = () => {
    const offline = `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGlkc7iFBiBQt5D0832sRuoXmiYnQAVSH1vPWJ9fMRL8GAs2anepuuQHwJ4u2nBgUmRZm3IjCLUnROpzXnm76QSPZqgapFShlITjPsmtHr4wErNJViV1MziQte9HWG5qp7hhxE1l8dfeZ78jBoMjqQvxsZWV0gOQ2OL9dN15cyq5q2LtJ14_3XHwu_/s16000/Bolt%20UIX%20-%20NO%20INTERNET.png`
    return (
        <div className="user-offline-container">
            <h1 className="user-offline-heading">🔴 Offline!</h1>
            <img className="offline-image" src={offline} alt="Offline" />
            <p className="user-offline-message">
                Sorry, it seems that you are currently offline.
            </p>
        </div>
    );
};

export default UserOffline;