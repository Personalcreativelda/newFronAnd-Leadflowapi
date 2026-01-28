import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactFormDialog = ({ open, onOpenChange }: ContactFormDialogProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validar campos obrigatórios
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        toast({
          title: "Erro",
          description: "Por favor, preencha todos os campos obrigatórios.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // Email validation básica
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Erro",
          description: "Por favor, insira um email válido.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // Usar FormSubmit.co para enviar o email gratuitamente
      const form = new FormData();
      form.append("_subject", `Novo contato: ${formData.firstName} ${formData.lastName}`);
      form.append("Nome", `${formData.firstName} ${formData.lastName}`);
      form.append("Email", formData.email);
      form.append("Telefone", formData.phone);
      form.append("Website", formData.website || "Não informado");
      form.append("_redirect", window.location.href);

      const response = await fetch("https://formsubmit.co/suporte@leadflowapi.com", {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      toast({
        title: "Sucesso!",
        description: "Sua mensagem foi enviada. Em breve entraremos em contato!",
      });

      // Limpar formulário
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        website: "",
      });

      onOpenChange(false);
    } catch (error) {
      console.error("Erro:", error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar a mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Falar com Especialista</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nome *</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="João"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Sobrenome *</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Silva"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email de Trabalho *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="joao@empresa.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone *</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="+55 (11) 9999-9999"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Site da Empresa</Label>
            <Input
              id="website"
              name="website"
              placeholder="www.empresa.com"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar"
            )}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center">
          * Campos obrigatórios
        </p>
      </DialogContent>
    </Dialog>
  );
};
