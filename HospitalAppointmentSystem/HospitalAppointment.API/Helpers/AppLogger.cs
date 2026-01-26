using System.Text;

namespace HospitalAppointment.API.Helpers
{
    public class AppLogger
    {
        private readonly string _logFilePath;

        public AppLogger()
        {
            _logFilePath = Path.Combine(
                Directory.GetCurrentDirectory(),
                "Logs",
                "app-log.txt"
            );

            Directory.CreateDirectory(
                Path.GetDirectoryName(_logFilePath)!
            );
        }

        public void Log(string message)
        {
            var logMessage = $"{DateTime.Now} : {message}";
            File.AppendAllText(_logFilePath, logMessage + Environment.NewLine);
        }
    }
}
