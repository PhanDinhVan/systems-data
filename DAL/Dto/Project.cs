using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Dto
{
    public class Project
    {
        public Int64 ID { get; set; }
        public string SYSTEM_ID { get; set; }
        public string SYSTEM_DESC { get; set; }
        public string SYS_URL { get; set; }
        public decimal SEQNO { get; set; }
    }
}
