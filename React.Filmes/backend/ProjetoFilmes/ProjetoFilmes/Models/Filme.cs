using System;
using System.Collections.Generic;

namespace ProjetoFilmes.Models
{
    public partial class Filme
    {
        public int IdFilme { get; set; }
        public string Titulo { get; set; }
        public int? IdGenero { get; set; }

        public Genero IdGeneroNavigation { get; set; }
    }
}
