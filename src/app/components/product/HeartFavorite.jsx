import { Heart } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import User from "@/backend/models/User"

const HeartFavorite = ({ product, updateSignedInUser }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isLiked, setIsLiked] = useState(false);

    const getUser = async () => {
        try {
          const res = await fetch("/backend/controllers/userController");
          const data = await res.json();
          setUser(data); // Lấy thông tin người dùng từ dữ liệu trả về
          setIsLiked(data.wishlist.includes(product._id));
        } catch (err) {
          console.log("[users_GET]", err);
        }
      };
    
      useEffect(() => {
        getUser(); // Gọi getUser khi component mount
      }, []);
    
      const handleLike = async (e) => {
        e.preventDefault();
        try {
          if (!user) {
            router.push("/sign-in");
            return;
          } else {
            const res = await fetch("/api/wishlist", {
              method: "POST",
              body: JSON.stringify({ productId: product._id }),
            });
            const updatedUser = await res.json();
            setIsLiked(updatedUser.wishlist.includes(product._id));
            updateSignedInUser && updateSignedInUser(updatedUser);
          }
        } catch (err) {
          console.log("[wishlist_POST]", err);
        }
      };

    return (
        <button onClick={handleLike}>
            <Heart fill={`${isLiked ? "red" : "white"}`} />
        </button>
    );
};

export default HeartFavorite;
