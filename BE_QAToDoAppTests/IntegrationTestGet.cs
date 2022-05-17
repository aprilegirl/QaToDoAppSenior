using Xunit;
using RestSharp;

namespace BE_QAToDoAppTests
{
    public class IntegrationTestGet
    {
        [Fact]
        public void Test_Get_ToDoItems()
        {

            var client = new RestClient(Constants.BaseUrl);
            
            //post
            var postRequest = new RestRequest(Constants.TodoItemsService, Method.Post);
            postRequest.RequestFormat = DataFormat.Json;
            postRequest.AddJsonBody(new{text = "Pay the bills"});

            var postResult = client.ExecutePostAsync(postRequest).Result;


            //get
            var getRequest = new RestRequest(Constants.TodoItemsService, Method.Get);
            var restResponse = client.ExecuteAsync(getRequest).Result;
            Assert.Contains("Pay the bills", restResponse.Content);

            //get one item
            var idToGet = 2;
            var getIdRequest = new RestRequest(ServiceUrlHelper.GetToDoUrlWithId(idToGet), Method.Get);
            var getIdResponse = client.ExecuteAsync(getIdRequest).Result;

            //delete
            var idToDelete = 3;
            var deleteRequest = new RestRequest(ServiceUrlHelper.GetToDoUrlWithId(idToDelete), Method.Delete);
            var deleteResponse = client.DeleteAsync(deleteRequest).Result;

        }
    }
}
