using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BE_QAToDoAppTests
{
    public static class ServiceUrlHelper
    {
        public static string GetToDoUrlWithId(int id)
        {
            return Constants.TodoItemsService + "/" + id;
        }
    }
}
