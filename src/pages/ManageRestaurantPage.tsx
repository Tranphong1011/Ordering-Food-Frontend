import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { currentRestaurant, isLoading: isGetLoading } = useGetMyRestaurant();
  console.log("currentRestaurant", currentRestaurant);
  if (isGetLoading) {
    return <span>Loading</span>;
  }

  if (!currentRestaurant) {
    return <span>Unable to load restaurant profile</span>;
  }

  return (
    <ManageRestaurantForm
      restaurant={currentRestaurant}
      onSave={createRestaurant}
      isLoading={isCreateLoading}
    />
  );
};

export default ManageRestaurantPage;
