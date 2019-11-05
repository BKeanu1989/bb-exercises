public class HelloWorld {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Hello World");
		
		char[] spaltenArray = new char[] {'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'};
		int[] zeilenArray = new int[] {1,2,3,4,5,6,7,8};
				
		ausgabe(zeilenArray, spaltenArray);
		ausgabe2(zeilenArray, spaltenArray);
	}
	
	public static void ausgabe(int[] zeilenArray, char[] spaltenArray) {
		for (int reihe = zeilenArray.length; reihe >= 1; reihe--) {
			for (int spaltenIndex = 0; spaltenIndex < spaltenArray.length; spaltenIndex++) {
				String stringZurAusgabe = formatStringZurAusgabe(spaltenArray, spaltenIndex, reihe);
				System.out.print(stringZurAusgabe);
			}
			
			System.out.println("");
		}	
	}
	

	public static void ausgabe2(int[] zeilenArray, char[] spaltenArray) {
		for (int reihe = 1; reihe < zeilenArray.length + 1; reihe++) {
			for (int spaltenIndex = spaltenArray.length - 1; spaltenIndex >= 0; spaltenIndex--) {
				String stringZurAusgabe = formatStringZurAusgabe(spaltenArray, spaltenIndex, reihe);
				
				System.out.print(stringZurAusgabe);
			}
			
			System.out.println("");
		}
	}
	
	public static String formatStringZurAusgabe(char[] spaltenArray, int spaltenIndex, int reihe) {
		String stringZurAusgabe = String.format("%s%s", spaltenArray[spaltenIndex], reihe);
		if (spaltenIndex != spaltenArray.length) {
			stringZurAusgabe += ' ';
		}
		return stringZurAusgabe;
	}
}
