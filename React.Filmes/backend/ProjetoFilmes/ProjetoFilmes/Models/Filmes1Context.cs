using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ProjetoFilmes.Models
{
    public partial class Filmes1Context : DbContext
    {
        public Filmes1Context()
        {
        }

        public Filmes1Context(DbContextOptions<Filmes1Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Filme> Filmes { get; set; }
        public virtual DbSet<Genero> Generos { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=LAPTOP-OEOULMOC\\SQLEXPRESS;Database=Filmes1;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Filme>(entity =>
            {
                entity.HasKey(e => e.IdFilme);

                entity.HasIndex(e => e.Titulo)
                    .HasName("UQ__Filmes__7B406B56A00735AB")
                    .IsUnique();

                entity.Property(e => e.Titulo)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdGeneroNavigation)
                    .WithMany(p => p.Filmes)
                    .HasForeignKey(d => d.IdGenero)
                    .HasConstraintName("FK__Filmes__IdGenero__3A81B327");
            });

            modelBuilder.Entity<Genero>(entity =>
            {
                entity.HasKey(e => e.IdGenero);

                entity.HasIndex(e => e.Nome)
                    .HasName("UQ__Generos__7D8FE3B2CCE0556D")
                    .IsUnique();

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario);

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Usuarios__A9D1053490FA3270")
                    .IsUnique();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Permissao)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });
        }
    }
}
