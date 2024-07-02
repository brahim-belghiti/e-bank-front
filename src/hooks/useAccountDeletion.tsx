import AccountServices from "@/api/account";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useAccountDeletion = (id: number | null, resetSelection: () => void) => {
  const deleteaccounts = async () => {
    try {
      await AccountServices.deleteAccount(id);
      toast.success("Compte supprimer avec succes");
      resetSelection();
    } catch (error) {
      toast.error("Erreur lors de la suppression du compte");
    }
  };

  const queryClient = useQueryClient();

  const deleteClientMutation = useMutation({
    mutationFn: deleteaccounts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
    },
  });

  const handleDelete = () => {
    deleteClientMutation.mutate();
  };

  return {
    handleDelete,
  };
};

export default useAccountDeletion;
