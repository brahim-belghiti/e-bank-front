import CustomerServices from "@/api/customer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCustomerDeletion = (getId: () => number | null, resetSelection: () => void) => {
  const deleteCustomers = async () => {
    try {
      await CustomerServices.deleteCustomer(getId());
      toast.success("Client supprimer avec succes");
      resetSelection();
    } catch (error) {
      toast.error("Erreur lors de la suppression du client");
    }
  };

  const queryClient = useQueryClient();

  const deleteClientMutation = useMutation({
    mutationFn: deleteCustomers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
  });

  const handleDelete = () => {
    deleteClientMutation.mutate();
  };

  return {
    handleDelete,
  };
};

export default useCustomerDeletion;
