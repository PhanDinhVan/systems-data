using DAL.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System_Data;

namespace DAL.Bus
{
    public class UserBus
    {
        public static List<User> GetUserById(string UserId)
        {
            List<User> user = new List<User>();
            try
            {
                string strSql = @"SELECT  * FROM T_CM_USMT WHERE USERID = '" + UserId + "'";

                user = OracleDbManager.GetObjects<User>(strSql, null);

            }
            catch (Exception ex)
            {
                var mes = ex.Message;
                return null;
            }

            return user;
        }
    }
}
