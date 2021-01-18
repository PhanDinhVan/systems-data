using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Dto
{
    public class Relationship
    {
        public decimal ID { get; set; }
        public string FROM_SYSID { get; set; }
        public string TO_SYSID { get; set; }
        public string MEMO { get; set; }
        public string FROM_NAME { get; set; }
        public string TO_NAME { get; set; }
    }
}
