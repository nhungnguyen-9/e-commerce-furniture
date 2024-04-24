import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const HeartFavorite = ({ product, updateSignedInUser }) => {
    // const router = useRouter();
    // const [user, setUser] = useState(null);
    const [isLiked, setIsLiked] = useState(false);

    // const getUser = async () => {
    //     try {
    //       // const res = await fetch("/api/users");    
    //       const res = await axios.get('/api/users')         
    //       console.log(res)
    //       const data = await res.json();
    //       setUser(data); // Lấy thông tin người dùng từ dữ liệu trả về
    //       setIsLiked(data.wishlist.includes(product._id));
    //     } catch (err) {
    //       console.log("[users_GET]", err);
    //     }
    //   };
    
    //   useEffect(() => {
    //     if (user) {
    //       getUser();
    //     }
    //   }, [user]);
    
    //   const handleLike = async (e) => {
    //     e.preventDefault();
    //     try {
    //       if (!user) {
    //         router.push("/login");
    //         return;
    //       } else {
    //         const res = await fetch("/api/wishlist", {
    //           method: "POST",
    //           body: JSON.stringify({ productId: product._id }),
    //         });
    //         const updatedUser = await res.json();
    //         setIsLiked(updatedUser.wishlist.includes(product._id));
    //         updateSignedInUser && updateSignedInUser(updatedUser);
    //       }
    //     } catch (err) {
    //       console.log("[wishlist_POST]", err);
    //     }
    //   };

    return (
        <button onClick={null}>
            <Heart fill={`${isLiked ? "red" : "white"}`} />
        </button>
    );
};

export default HeartFavorite;
