import TranscationList from "@/components/customer/transactions-list/TransactionsList";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Dashboard = () => {
  return (
    <main className="mt-16 p-4 px-12 w-full h-full flex flex-col gap-8">
      <section className="flex flex-col gap-2">
        <p className="text-sm text-gray-500">Visulaiser informations sur tous vos comptes</p>
        <Select defaultValue="compte3">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="choisir compte" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="compte1">compte1</SelectItem>
            <SelectItem value="compte2">compte2</SelectItem>
            <SelectItem value="compte3">compte3</SelectItem>
          </SelectContent>
        </Select>
      </section>
      <section className="flex justify-between items-center w-11/12">
        <div>
          <p className="text-sm text-gray-500">Le nom du compte </p>
          <p className="text-2xl font-bold">compte 1</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Solde bancaire </p>
          <p className="text-2xl font-bold">5000 DH</p>
        </div>
      </section>
      <section>
        <TranscationList />
      </section>
    </main>
  );
};

export default Dashboard;
