using System;
using System.ComponentModel.DataAnnotations;

namespace backDisersoft.Models
{
    public class Preventico
    {

        public int Id { get; set; }

        [Required]
        public string num_bus { get; set; }

        [Required]
        public string name_tec { get; set; }

        [Required]
        public int num_ticket { get; set; }

        [Required]
        public float kilometers { get; set; }


        [Required]
        public DateTime startDate { get; set; }

        [Required]
        public DateTime endDate { get; set; }

        [Required]
        public string comment { get; set; }

        public string images { get; set; }
    }
}
