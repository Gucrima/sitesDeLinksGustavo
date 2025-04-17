using Microsoft.EntityFrameworkCore;

namespace BackContador.Data // Ajuste o namespace conforme a estrutura do seu projeto
{
    public class Acesso {
        public int Id { get; set; }
        public int Contador { get; set; }
    }

    public class AppDbContext : DbContext {
        public DbSet<Acesso> Acessos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder.UseSqlite("Data Source=acessos.db");
        }
    }
}