using DAL.Dto;
using Oracle.ManagedDataAccess.Client;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System_Data;

namespace DAL.Bus
{
    public class RelationshipBus
    {
        public static List<Relationship> GetListRelationship()
        {
            List<Relationship> list = new List<Relationship>();
            try
            {
                string strSql = @"SELECT T_00_SMRS.*, A.SYSTEM_DESC AS FROM_NAME, B.SYSTEM_DESC AS TO_NAME
                                  FROM T_00_SMRS 
	                                JOIN T_00_SYSM A ON A.ID = T_00_SMRS.FROM_SYSID 
	                                JOIN T_00_SYSM B ON B.ID = T_00_SMRS.TO_SYSID ";

                list = OracleDbManager.GetObjects<Relationship>(strSql, CommandType.Text, null);

            }
            catch (Exception ex)
            {
                var mes = ex.Message;
                return null;
            }

            return list;
        }

        
        public static bool InsertRelationship(Relationship frm)
        {
            string strSql = @"  INSERT INTO T_00_SMRS(FROM_SYSID, TO_SYSID, MEMO)
                        VALUES(:P_FROM_SYSID, :P_TO_SYSID, :P_MEMO) ";

            var param = new List<OracleParameter>
            {
                new OracleParameter("P_FROM_SYSID", frm.FROM_SYSID),
                new OracleParameter("P_TO_SYSID", frm.TO_SYSID),
                new OracleParameter("P_MEMO", frm.MEMO)
            };

            var blIns = OracleDbManager.ExecuteQuery(strSql, param.ToArray(), CommandType.Text);

            return blIns != null;
        }

        public static List<Relationship> getEditRelationship(string id)
        {
            List<Relationship> obj = new List<Relationship>();
            try
            {
                var ID = Convert.ToInt64(id);
                string strSql = @"SELECT  * FROM T_00_SMRS WHERE ID = " + ID;

                obj = OracleDbManager.GetObjects<Relationship>(strSql, null);

            }
            catch (Exception ex)
            {
                var mes = ex.Message;
                return null;
            }

            return obj;
        }

        public static bool postEditRelationship(Relationship frm)
        {
            string strSql = @" UPDATE T_00_SMRS SET FROM_SYSID = :P_FROM_SYSID, TO_SYSID = :P_TO_SYSID, MEMO = :P_MEMO WHERE ID = :P_ID";


            var param = new List<OracleParameter>
            {
                new OracleParameter("P_FROM_SYSID", frm.FROM_SYSID),
                new OracleParameter("TO_SYSID", frm.TO_SYSID),
                new OracleParameter("P_MEMO", frm.MEMO),
                new OracleParameter("P_ID", frm.ID)
            };

            var blIns = OracleDbManager.ExecuteQuery(strSql, param.ToArray(), CommandType.Text);

            return blIns != null;
        }

        
        public static bool deleteRelationship(string id)
        {
            string strSql = @"DELETE FROM T_00_SMRS WHERE ID = " + id;

            var blIns = OracleDbManager.ExecuteQuery(strSql, null, CommandType.Text);

            return blIns != null;
        }

    }
}
