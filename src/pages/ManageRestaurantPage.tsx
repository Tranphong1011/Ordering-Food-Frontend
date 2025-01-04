import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();

  const { currentRestaurant, isLoading: isGetLoading } = useGetMyRestaurant();

  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  if (isGetLoading) {
    return <span>Loading</span>;
  }

  if (!currentRestaurant) {
    return <span>Unable to load restaurant profile</span>;
  }
  const isEditing = !!currentRestaurant;
  // const isEditing = currentRestaurant ? true : false;
  return (
    <ManageRestaurantForm
      restaurant={currentRestaurant}
      onSave={isEditing ? updateRestaurant : createRestaurant}
      isLoading={isCreateLoading || isUpdateLoading}

    />
  );
};

export default ManageRestaurantPage;
