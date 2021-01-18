using DAL.Dto;
using Oracle.ManagedDataAccess.Client;
using System;
using System.Collections.Generic;
using System.Data;
using System.Deployment.Internal;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System_Data;

namespace DAL.Bus
{
    public class ProjectBus
    {

        public static List<Project> GetProject()
        {
            List<Project> list = new List<Project>();
            try
            {
                string strSql = @"SELECT * FROM T_00_SYSM ORDER BY ID DESC";

                list = OracleDbManager.GetObjects<Project>(strSql, CommandType.Text, null);

            }
            catch (Exception ex)
            {
                var mes = ex.Message;
                return null;
            }

            return list;
        }
        public static bool InsertProject(Project frm)
        {
            string strSql = @"  INSERT INTO T_00_SYSM(SYSTEM_ID, SYSTEM_DESC, SYS_URL, SEQNO)
                        VALUES(:P_SYSTEM_ID, :P_SYSTEM_DESC, :P_SYS_URL, :P_SeqNo) ";

            var param = new List<OracleParameter>
            {
                new OracleParameter("P_SYSTEM_ID", frm.SYSTEM_ID),
                new OracleParameter("P_SYSTEM_DESC", frm.SYSTEM_DESC),
                new OracleParameter("P_SYS_URL", frm.SYS_URL),
                new OracleParameter("P_SeqNo", frm.SEQNO)
            };

            var blIns = OracleDbManager.ExecuteQuery(strSql, param.ToArray(), CommandType.Text);

            return blIns != null;
        }

        public static List<Project> getEditProject (string id)
        {
            List<Project> obj = new List<Project>();
            try
            {
                var ID = Convert.ToInt64(id);
                string strSql = @"SELECT  * FROM T_00_SYSM WHERE ID = " + ID;

                obj = OracleDbManager.GetObjects<Project>(strSql, null);

            }
            catch (Exception ex)
            {
                var mes = ex.Message;
                return null;
            }

            return obj;
        }

        public static bool postEditProject(Project frm)
        {
            string strSql = @" UPDATE T_00_SYSM SET SYSTEM_ID = :P_SYSTEM_ID, SYSTEM_DESC = :P_SYSTEM_DESC, SYS_URL = :P_SYS_URL, SEQNO = :P_SeqNo WHERE ID = :P_ID";


            var param = new List<OracleParameter>
            {
                new OracleParameter("P_SYSTEM_ID", frm.SYSTEM_ID),
                new OracleParameter("P_SYSTEM_DESC", frm.SYSTEM_DESC),
                new OracleParameter("P_SYS_URL", frm.SYS_URL),
                new OracleParameter("P_SeqNo", frm.SEQNO),
                new OracleParameter("P_ID", frm.ID)
            };

            var blIns = OracleDbManager.ExecuteQuery(strSql, param.ToArray(), CommandType.Text);

            return blIns != null;
        }

        public static bool deleteProject(string id)
        {
            var ID = Convert.ToInt64(id);
            string strSql = @"DELETE FROM T_00_SYSM WHERE ID = " + ID;


            var blIns = OracleDbManager.ExecuteQuery(strSql, null, CommandType.Text);

            return blIns != null;
        }
    }
}
