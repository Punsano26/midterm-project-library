import React from "react";
import Swal from "sweetalert2";
import LibraryService from "../services/library.service";
import { useAuthContext } from "../contexts/AuthContext";

const Card = ({
  bookID,
  title,
  img,
  author,
  publicationYear,
  category,
  page,
}) => {
  const { user } = useAuthContext();

  const deleteBook = async (bookID) => {
    console.log("Deleting book with ID:", bookID);
    try {
      const response = await LibraryService.deleteLibrary(bookID);
      if (response.status === 200) {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Remove หนังสืออกจากระบบเรียบร้อย!",
              icon: "success",
              timer: 1800,
            }).then(() => {
              window.location.reload();
            });
          } else if (result.isDismissed) {
            Swal.fire({
              title: "Cancelled",
              text: "Your file is safe.",
              icon: "info",
            });
          }
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="card glass w-80 shadow-xl">
      <figure>
        <img src={img} alt="Book!" className="rounded w-36 h-56 mt-3" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{author}</p>
        <p>{publicationYear}</p>
        <p>{category}</p>
        <p>{page}</p>
        {user &&
          (user.roles.includes("ROLE_MODERATOR") ||
            user.roles.includes("ROLE_ADMIN")) && (
            <div className="card-actions justify-end">
              <a href={`/edit/${bookID}`} className="btn btn-primary">
                Edit now!
              </a>
              {user && user.roles.includes("ROLE_ADMIN") && (
                <button
                  onClick={() => deleteBook(bookID)}
                  className="btn btn-primary"
                >
                  Remove a book
                </button>
              )}
            </div>
          )}
          
      </div>
    </div>
  );
};

export default Card;
